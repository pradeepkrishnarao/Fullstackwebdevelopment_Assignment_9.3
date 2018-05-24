	var even=[2,4,6,8]; //even array initialized
	var odd=[1,3,5,7];  //odd array initialized
	var primes=[2,3,5,7,11]; //primes array initialized
	
	var singleArray=[...even,...odd,...primes]; //Combined even, odd and primes array into singleArray
	
	var copiedPrimes=[...primes]; //primes array copied into copiedPrimes array
	
	var jamesBond={ //jamesBond Object initialized
					first:'James',
					last:'Bond',
					country:'United States',
					city:'New York',
					twitter:'@jamesbond'
				};
	var{
			first,
			last,
			twitter
        }=jamesBond;//Destructered below Object into variables name same the property names	
        
	var players=['paul','andy','darrell','jim']; //players array initialized
	var [player1,player2,player3,player4]=players; //Destructured players array into variables name player1, player2, player3 and player4 respectively
	