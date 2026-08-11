// See https://aka.ms/new-console-template for more information
using System;
using System.Data;
using System.Reflection;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
namespace Operator_Guessing_Game
{
    public class Guesser
    {
        public async Task Guesses()
        {
            int rand1 = Random.Shared.Next(1, 21);
            int rand2 = Random.Shared.Next(1, 11);
            char[] oprand = ['*', '+', '-', '%', '/'];
            char randOprand = oprand[Random.Shared.Next(oprand.Length)];
            float total = randOprand switch
            {
                '*' => rand1 * rand2,
                '+' => rand1 + rand2,
                '-' => rand1 - rand2,
                '%' => rand1 % rand2,
                '/' => rand2 != 0 ? rand1 / rand2 : 0,
                _ => throw new InvalidOperationException("Unknown operator choose between (+,-,*,%,/)")
            };
            int lives = 3;
            Console.WriteLine($"\nThe number {rand1} and {rand2} would give {total} as the solution \nGuess the operator used to get the solution?");



            for (int i = 0; i <= lives; i++)
            {
                if (i == lives)
                {
                    Console.WriteLine("\nPress 'y' to Play again, or any other key to exit game");
                    char inp2 = Console.ReadKey().KeyChar;
                    if (inp2 == 'y')
                    {
                        Console.WriteLine("\n");

                        Guesser myfunction = new Guesser();
                        myfunction.Guesses();
                    }
                    else
                    {
                        Console.WriteLine("\nGame Over");

                    }
                }
                else
                {
                    char input = Console.ReadKey().KeyChar;
                    if (input == randOprand)
                    {
                        Console.WriteLine("\n CORRECT");
                        Console.WriteLine("press 'y' to Play again, or any other key to exit game");
                        char inp = Console.ReadKey().KeyChar;
                        if (inp == 'y')
                        {
                            Console.WriteLine("\n");

                            Guesser myfunction = new Guesser();
                            myfunction.Guesses();

                        }
                        break;




                    }
                    else
                    {
                        int counter = lives - (i + 1);
                        if (counter == 0)
                        {
                            Console.WriteLine($"\nWRONG AGAIN!.... \nYou have no more trials remaining");
                        }
                        else
                        {


                            Console.WriteLine($"\nWRONG TRY AGAIN!.....\nYou have {counter} more trials remaining");
                            // await Task.Delay(500);
                            Console.WriteLine($" \nThe number {rand1} and {rand2} would give {total} as the solution \nGuess the operator used to get the solution?");


                        }


                    }

                }
            }



        }
    }

    class GuessStart
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("\nWELCOME TO THE OPERATOR GUESSER");
            await Task.Delay(1000);
            Console.WriteLine("\nWhat is your name? ");
            string name = Console.ReadLine().ToUpper();
            await Task.Delay(1000);
            Console.WriteLine($"\nWow that's a good name \nWelcome {name}, to the OPERATOR GUESSING GAME");
            await Task.Delay(3000);

            Console.WriteLine("\n.......INSTRUCTIONS...... \nGuess what operator (+,-,*,%,/) was used to get the final answer of these numbers");
            await Task.Delay(3000);


            Guesser myfunction = new Guesser();
            myfunction.Guesses();

        }
    }
}

