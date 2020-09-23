using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace Game_Buddy_Finder
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            Console.WriteLine($"{user}: {message}");
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public override async Task OnConnectedAsync()
        {
            await Task.Run(() => Console.WriteLine(Context.ConnectionId));
        }
    }
}