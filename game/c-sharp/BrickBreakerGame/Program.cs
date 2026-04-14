using System;
using System.Drawing;
using System.Windows.Forms;

public class BrickBreaker : Form
{
    private Timer gameTimer;
    private Panel paddle;
    private Panel ball;
    private Panel[] bricks;
    private int ballSpeedX = 4;
    private int ballSpeedY = 4;
    private int score = 0;

    public BrickBreaker()
    {
        // Form setup
        this.Text = "Brick Breaker";
        this.Size = new Size(800, 600);
        this.StartPosition = FormStartPosition.CenterScreen;
        this.FormBorderStyle = FormBorderStyle.FixedDialog;
        this.MaximizeBox = false;

        // Paddle setup
        paddle = new Panel
        {
            Size = new Size(100, 10),
            BackColor = Color.Blue,
            Location = new Point((this.ClientSize.Width - 100) / 2, this.ClientSize.Height - 50)
        };
        this.Controls.Add(paddle);

        // Ball setup
        ball = new Panel
        {
            Size = new Size(10, 10),
            BackColor = Color.Red,
            Location = new Point(this.ClientSize.Width / 2, this.ClientSize.Height / 2)
        };
        this.Controls.Add(ball);

        // Bricks setup
        bricks = new Panel[20];
        for (int i = 0; i < bricks.Length; i++)
        {
            bricks[i] = new Panel
            {
                Size = new Size(60, 20),
                BackColor = Color.Green,
                Location = new Point(10 + (i % 10) * 70, 10 + (i / 10) * 30)
            };
            this.Controls.Add(bricks[i]);
        }

        // Timer setup
        gameTimer = new Timer
        {
            Interval = 16 // ~60 FPS
        };
        gameTimer.Tick += GameLoop;
        gameTimer.Start();

        // Key events
        this.KeyDown += OnKeyDown;
        this.KeyUp += OnKeyUp;
    }

    private void GameLoop(object sender, EventArgs e)
    {
        // Move ball
        ball.Left += ballSpeedX;
        ball.Top += ballSpeedY;

        // Ball collision with walls
        if (ball.Left <= 0 || ball.Right >= this.ClientSize.Width)
            ballSpeedX = -ballSpeedX;
        if (ball.Top <= 0)
            ballSpeedY = -ballSpeedY;

        // Ball collision with paddle
        if (ball.Bounds.IntersectsWith(paddle.Bounds))
            ballSpeedY = -ballSpeedY;

        // Ball collision with bricks
        foreach (var brick in bricks)
        {
            if (brick != null && ball.Bounds.IntersectsWith(brick.Bounds))
            {
                this.Controls.Remove(brick);
                ballSpeedY = -ballSpeedY;
                score++;
                break;
            }
        }

        // Check for game over
        if (ball.Bottom >= this.ClientSize.Height)
        {
            gameTimer.Stop();
            MessageBox.Show($"Game Over! Your score: {score}");
            Application.Exit();
        }
    }

    private bool moveLeft, moveRight;

    private void OnKeyDown(object sender, KeyEventArgs e)
    {
        if (e.KeyCode == Keys.Left)
            moveLeft = true;
        if (e.KeyCode == Keys.Right)
            moveRight = true;
    }

    private void OnKeyUp(object sender, KeyEventArgs e)
    {
        if (e.KeyCode == Keys.Left)
            moveLeft = false;
        if (e.KeyCode == Keys.Right)
            moveRight = false;
    }

    protected override void OnPaint(PaintEventArgs e)
    {
        base.OnPaint(e);

        // Paddle movement
        if (moveLeft && paddle.Left > 0)
            paddle.Left -= 8;
        if (moveRight && paddle.Right < this.ClientSize.Width)
            paddle.Left += 8;
    }

    [STAThread]
    public static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new BrickBreaker());
    }
}