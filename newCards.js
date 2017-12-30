var deal2 = new Array();

var deal = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];

 
var cardRank = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

var cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];

var north = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var south= [0,1,2,3,4,5,6,7,8,9,10,11,12];
var east = [0,1,2,3,4,5,6,7,8,9,10,11,12];
var west = [0,1,2,3,4,5,6,7,8,9,10,11,12];

var j;

function rank(card)
{
var i = card%13;
return cardRank[i];
 

}

function suit(card)
{

 
        if(Math.floor(card/13)==0)
        {
            return "C";
        }
        else if(Math.floor(card/13)==1)
        {
            return "D";
        }
        else if(Math.floor(card/13)==2)
        {
            return "H";
        }
        else if(Math.floor(card/13)==3)
        {
            return "S";
        }

//var cardSuit = ['C','D','H','S'];

}

function printCards()
    {
   
        for(var i =0; i <=51; i++)
        {
       
            //document.write(rank(cards[i]) + suit(cards[i]) + "<br/>");
       
            //deal2[i]=i;
            //deal2[i] =(rank(cards[i]) + suit(cards[i]));
            document.write(""+rank(cards[i]) + suit(cards[i])+"<br/>");
        }
   
    }
 
function permute()
    {
        for(var i=1; i<=100; i++)
        {
            var randomIndex = Math.floor(Math.random()*52);
            var randomIndex2 = Math.floor(Math.random()*52);
       
            var temp = deal[randomIndex];
       
            deal[randomIndex] = deal[randomIndex2];
            deal[randomIndex2] = temp;
        }
    }
 
function printPermute()
  {
        for(var j =0; j <=51; j++)
        {
            document.write(deal2[j] + "<br/>");
        }
    }
 
function dealHand()
{
    for( j = 0; j<=51; j++)
    {
        if((j/13)==0)
        {
       
            for(var a=0; a<=12; a++)
            {
                north[a] = deal[j];
                j++;
                //document.write(north[a]);
           
            }
        }
   
        if((j/13)==1)
        {
            //document.write("South" + "<br/>");
            for(var b=0; b<=12; b++)
            {
                south[b] = deal[j];
                j++;
            }
        }
        if((j/13)==2)
        {
            for(var c=0; c<=12; c++)
            {
                east[c] = deal[j];
                j++;
            }
        }
        if((j/13)==3)
        {
            for(var d=0; d<=12; d++)
            {
                west[d] = deal[j];
                j++;
            }
        }
    }
}
 
function print()
{
    document.write("<br/>"+"North: " );
    for(var d = 0; d<=12; d++)
    {
        document.write( " " +rank(north[d]) + suit(north[d]));
  
    }
 
    document.write("<br/>");
    document.write("South: ");
    for(var d = 0; d<=12; d++)
    {
        //document.write(south[d]);
        document.write( " " +rank(south[d]) + suit(south[d]));
   
    }
 
    document.write("<br/>");
    document.write("East: ");
 
    for(var d = 0; d<=12; d++)
    {
        //document.write(east[d]);
        document.write( " " +rank(east[d]) + suit(east[d]));
   
    }
 
    document.write("<br/>");
    document.write("West: ");
 
    for(var d = 0; d<=12; d++)
    {
        //document.write(west[d]);
        document.write( " " +rank(west[d]) + suit(west[d]));
   
    }
 
}

function sortSuit()
{
    north.sort(function(a,b){return a-b});
    south.sort(function(a,b){return a-b});
    east.sort(function(a,b){return a-b});
    west.sort(function(a,b){return a-b});
}

function printHand(hand)
{
    document.write("Spades: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'S')
          {
                document.write(rank(hand[i])+", ");
          }
      }
   
      document.write("<br />");
      document.write("Hearts: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'H')
          {
            document.write(rank(hand[i])+", ");
          }
      }
   
      document.write("<br />");
      document.write("Diamonds: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'D')
          {
            document.write(rank(hand[i])+", ");
          }
      }
   
      document.write("<br />");
      document.write("Clubs: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'C')
          {
                document.write(rank(hand[i])+", ");
          }
      }
   
   
}

function setHand(hand)
{

    var spades = " ";
    var hearts = " ";
    var diamonds = " ";
    var clubs = " ";
   
    //document.write("Spades: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'S')
          {
                spades = spades + rank(hand[i])+", ";
          }
      }
   
      document.write("<br />");
      //document.write("Hearts: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'H')
          {
                hearts = hearts + rank(hand[i])+", ";
          }
      }
   
      document.write("<br />");
      //document.write("Diamonds: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'D')
          {
            diamonds = diamonds + rank(hand[i])+", ";
          }
      }
   
      document.write("<br />");
      //document.write("Clubs: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(hand[i]) == 'C')
          {
                clubs = clubs + rank(hand[i])+", ";
          }
      }
   
   

    //spades = spades + " word2";
   
    return "Spades: " + spades + "<br/> " + "Hearts: " + hearts + "<br/>"
    + "Diamonds: " + diamonds + "<br/>" + "Clubs: " + clubs ;
    
}


function printDeal()
{
    document.write("<br/>");
    document.write("NORTH: ");
    document.write("<br/>");
  
  
    printHand(north);
    document.write("<br/>");
    document.write("<br/>");
  
    document.write("SOUTH:");
    document.write("<br/>");
    printHand(south);
    document.write("<br/>");
    document.write("<br/>");
  
    document.write("EAST:");
    document.write("<br/>");
    printHand(east);
    document.write("<br/>");
    document.write("<br/>");
  
    document.write("WEST:");
    document.write("<br/>");
    printHand(west);
    document.write("<br/>");
}

function testDeck()
{

    //printCards();
    //document.write("<br/>");
    permute();
       //printPermute();
    dealHand();
    
 
    //print();
    //printHand();
    //printDeal();
    //document.write("Print buttons");
}

 function testDeal()
    {
    
         dealHand();
         sortSuit();
          var currentHand = north;
          var currentHandName = "north";
          var currentHandDOM = document.getElementById(currentHandName);
          currentHandDOM.innerHTML = "NORTH" + "<br />" + setHand(currentHand);
          
          dealHand();
          sortSuit();
          var currentHand = south;
          var currentHandName = "south";
          var currentHandDOM = document.getElementById(currentHandName);
          currentHandDOM.innerHTML = "SOUTH"+ "<br />" + setHand(currentHand); 
          
          dealHand();
          sortSuit();
          var currentHand = west;
          var currentHandName = "west";
          var currentHandDOM = document.getElementById(currentHandName);
          currentHandDOM.innerHTML = "WEST" + "<br />" + setHand(currentHand); 
          
          dealHand();
          sortSuit();
          var currentHand = east;
          var currentHandName = "east";
          var currentHandDOM = document.getElementById(currentHandName);
          currentHandDOM.innerHTML = "EAST" + "<br />" + setHand(currentHand); 
      }
/******

function printHand()
{
    document.write("Spades: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(cards[i]) == 'S')
          {
        document.write(rank(cards[i])+", ");
          }
    }
   
      document.write("<br />");
      document.write("Hearts: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(cards[i]) == 'H')
          {
        document.write(rank(cards[i])+", ");
          }
      }
   
      document.write("<br />");
      document.write("Diamonds: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(cards[i]) == 'D')
          {
        document.write(rank(cards[i])+", ");
          }
      }
   
      document.write("<br />");
      document.write("Clubs: ");
    for(var i = 0; i < 13; i++)
    {
          if (suit(cards[i]) == 'C')
          {
        document.write(rank(cards[i])+", ");
          }
      }
   
   
}


*******/