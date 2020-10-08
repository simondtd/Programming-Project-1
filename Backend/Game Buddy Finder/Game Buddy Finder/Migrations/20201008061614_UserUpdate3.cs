using Microsoft.EntityFrameworkCore.Migrations;

namespace Game_Buddy_Finder.Migrations
{
    public partial class UserUpdate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SecretAnswer",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SecretQuestion",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SecretAnswer",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "SecretQuestion",
                table: "Users");
        }
    }
}
