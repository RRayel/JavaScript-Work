let score = JSON.parse(localStorage.getItem('score'));
            
            if(!score)
            {
                score =
                {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            }

            let isAutoPlaying = false;

            let intervalId;
            
            function autoplay()
            {
                if(!isAutoPlaying)
                    {
                        intervalId=    setInterval(function(){
                        const playerMove = pickComputerMove();
                        playGame(playerMove, pickComputerMove());
                    }, 1000);
                    isAutoPlaying = true;
                    
                    }else
                        {
                            clearInterval(intervalId);
                            isAutoPlaying = false;
                        }
                
                
            }
            

            function playGame(playerMove, computerMove)
            {
                let result = '';
                if (playerMove ==="Scissors")
                {
                        if(computerMove === 'Rock')
                    {
                        result = 'You lose';
                    }else if(computerMove ==='Paper')
                    {
                        result = 'You win';
                    }else if(computerMove === 'Scissors')
                    {
                        result = 'You tie';
                    }
                }
                else if(playerMove ==="Paper")
                {
                    if(computerMove === 'Rock')
                    {
                        result = 'You win';
                    }else if(computerMove ==='Paper')
                    {
                        result = 'You tie';
                    }else if(computerMove === 'Scissors')
                    {
                        result = 'You lose';
                    }
                }else if(playerMove ==="Rock")
                {
                    if(computerMove === 'Rock')
                    {
                        result = 'You tie';
                    }else if(computerMove ==='Paper')
                    {
                        result = 'You lose';

                    }else if(computerMove === 'Scissors')
                    {
                        result = 'You win';
                    }
                }

                if(result ==="You win")
                {
                    score.wins += 1;
                }else if(result === "You lose")
                {
                    score.losses +=1;
                }else if(result === "You tie")
                {
                    score.ties +=1;
                }

                updateScore();

                document.querySelector('.js-result').innerHTML = `${result}.`;

                document.querySelector('.js-move').innerHTML = `You <img src = "images/${playerMove}-emoji.png" class="image-icon"> Computer <img src="images/${computerMove}-emoji.png " class ="image-icon">`

                localStorage.setItem('score', JSON.stringify(score));

                

                //alert(`You picked ${playerMove} and the computer picked ${computerMove}, so ${result}.
                //Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

                

            }

            function updateScore()
            {
                document.querySelector('.js-score').innerHTML = 
                `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }
            
            //returns computer move and then sends it to each button
            function pickComputerMove()
            {
                const randomNumber = Math.random();
                if(randomNumber >= 0 && randomNumber < 1/3)
                {
                    computerMove= 'Rock';
                }else if(randomNumber >= 1/3 && randomNumber <2/3)
                {
                    computerMove= 'Paper';
                }else if(randomNumber >= 2/3 && randomNumber <1)
                {
                    computerMove= 'Scissors';
                }

                return computerMove;
            }