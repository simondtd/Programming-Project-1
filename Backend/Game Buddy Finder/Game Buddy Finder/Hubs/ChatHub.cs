using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Game_Buddy_Finder
{
    public class ChatHub : Hub
    {
        //Connection Id -> User Name
        private static Dictionary<string, string> ConnectedUsers = new Dictionary<string, string>();
        private static Dictionary<string, string> Clans = new Dictionary<string, string>();

        public async Task SendMessage(string message)
        {
            if (!ConnectedUsers.ContainsKey(Context.ConnectionId))
            {
                Console.WriteLine("Unknown user sent message, not connected to any groups");
                return;
            }

            var userName = ConnectedUsers[Context.ConnectionId];
            var packet = $"{userName}: {message}";
            var clanId = Clans[Context.ConnectionId];

            Console.WriteLine(packet);

            await Clients.Group(clanId).SendAsync("ReceiveMessage", packet);
        }

        public async Task JoinChat(int clanId, string username)
        {
            Console.WriteLine($"{username} {clanId}");
            var connectionId = Context.ConnectionId;
            if (!ConnectedUsers.ContainsKey(connectionId))
            {
                ConnectedUsers.Add(connectionId, username);
                Clans.Add(connectionId, clanId.ToString());
                await Groups.AddToGroupAsync(Context.ConnectionId, clanId.ToString());
            }
            else
            {
                Console.WriteLine("User already added, not supposed to happen");
                return;
            }
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.User(Context.UserIdentifier).SendAsync("Init");
            Console.WriteLine(Context.ConnectionId);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var connectionId = Context.ConnectionId;
            if (ConnectedUsers.ContainsKey(connectionId))
            {
                var clanId = Clans[connectionId];
                var userName = ConnectedUsers[Context.ConnectionId];
                Console.WriteLine($"User {userName} left");
                var packet = $"{userName} has left the chat";

                await Clients.OthersInGroup(clanId).SendAsync("ReceiveMessage", packet);


                ConnectedUsers.Remove(connectionId);
                Clans.Remove(connectionId);

                await Groups.RemoveFromGroupAsync(Context.ConnectionId, clanId);
            }
            else
            {
                Console.WriteLine("User Wasnt added, not supposed to happen");
                return;
            }


        }
    }
}