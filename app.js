const text = [
  'Deep into fergie time here', 'It was a great ball in, but there was nobody on the end of it', "he's hit that too well", "I've seen them given", 'A real six pointer', "He didn't quite catch all of it", "He's like an artist, he's got paintbrushes for feet", "But can they do it on a cold Tuesday night in Stoke?", 'A game of two halves', 'Great feet for a big lad', 'A real daisy cutter of a shot',
]

const commentator = ['Jermaine Jenas', 'Martin Keown', 'Glenn Hoddle', 'Steve McManaman', 'Danny Murphy', 'Ally McCoist', 'Michael Owen', 'Gary Neville', 'Jamie Carragher', 'Martin Tyler', 'Andy Gray', 'Robbie Savage', 'Andy Townsend', 'Lee Dixon']

const team1 = ["Accrington Stanley",
"AFC Wimbledon",
"Arsenal",
"Aston Villa",
"Barnsley",
"Barrow AFC",
"Birmingham City",
"Blackburn Rovers",
"Blackpool",
"Bolton Wanderers",
"Bournemouth",
"Bradford City",
"Brentford",
"Brighton and Hove Albion",
"Bristol City",
"Bristol Rovers",
"Burnley",
"Burton Albion",
"Cambridge United",
"Cardiff City",
"Carlisle United",
"Charlton Athletic",
"Chelsea",
"Cheltenham Town",
"Colchester United",
"Coventry City",
"Crawley Town",
"Crewe Alexandra",
"Crystal Palace",
"Derby County",
"Doncaster Rovers",
"Everton",
"Exeter City",
"Fleetwood Town",
"Forest Green Rovers",
"Fulham",
"Gillingham",
"Harrogate Town",
"Hartlepool United",
"Huddersfield Town",
"Hull City",
"Ipswich Town",
"Leeds United",
"Leicester City",
"Leyton Orient",
"Lincoln City",
"Liverpool",
"Luton Town",
"Macclesfield Town",
"Manchester City",
"Manchester United",
"Mansfield Town",
"Middlesborough",
"Millwall",
"Milton Keynes Dons",
"Morecambe",
"Newcastle United",
"Newport County",
"Northampton Town",
"Norwich City",
"Nottingham Forest",
"Oldham Athletic",
"Oxford United",
"Peterborough United",
"Plymouth Argyle",
"Port Vale",
"Portsmouth",
"Preston North End",
"Queens Park Rangers",
"Reading",
"Rochdale",
"Rotherham United",
"Salford City",
"Scunthorpe United",
"Sheffield United",
"Sheffield Wednesday",
"Shrewsbury Town",
"Southampton",
"Stevenage Borough",
"Stoke City",
"Sunderland",
"Sutton United",
"Swansea City",
"Swindon Town",
"Tottenham Hotspur",
"Tranmere Rovers",
"Walsall",
"Watford",
"West Bromwich Albion",
"West Ham United",
"Wigan Athletic",
"Wolverhampton Wanderers",
"Wycombe Wanderers"]
const team2 = ["Accrington Stanley",
"AFC Wimbledon",
"Arsenal",
"Aston Villa",
"Barnsley",
"Barrow AFC",
"Birmingham City",
"Blackburn Rovers",
"Blackpool",
"Bolton Wanderers",
"Bournemouth",
"Bradford City",
"Brentford",
"Brighton and Hove Albion",
"Bristol City",
"Bristol Rovers",
"Burnley",
"Burton Albion",
"Cambridge United",
"Cardiff City",
"Carlisle United",
"Charlton Athletic",
"Chelsea",
"Cheltenham Town",
"Colchester United",
"Coventry City",
"Crawley Town",
"Crewe Alexandra",
"Crystal Palace",
"Derby County",
"Doncaster Rovers",
"Everton",
"Exeter City",
"Fleetwood Town",
"Forest Green Rovers",
"Fulham",
"Gillingham",
"Harrogate Town",
"Hartlepool United",
"Huddersfield Town",
"Hull City",
"Ipswich Town",
"Leeds United",
"Leicester City",
"Leyton Orient",
"Lincoln City",
"Liverpool",
"Luton Town",
"Macclesfield Town",
"Manchester City",
"Manchester United",
"Mansfield Town",
"Middlesborough",
"Millwall",
"Milton Keynes Dons",
"Morecambe",
"Newcastle United",
"Newport County",
"Northampton Town",
"Norwich City",
"Nottingham Forest",
"Oldham Athletic",
"Oxford United",
"Peterborough United",
"Plymouth Argyle",
"Port Vale",
"Portsmouth",
"Preston North End",
"Queens Park Rangers",
"Reading",
"Rochdale",
"Rotherham United",
"Salford City",
"Scunthorpe United",
"Sheffield United",
"Sheffield Wednesday",
"Shrewsbury Town",
"Southampton",
"Stevenage Borough",
"Stoke City",
"Sunderland",
"Sutton United",
"Swansea City",
"Swindon Town",
"Tottenham Hotspur",
"Tranmere Rovers",
"Walsall",
"Watford",
"West Bromwich Albion",
"West Ham United",
"Wigan Athletic",
"Wolverhampton Wanderers",
"Wycombe Wanderers"]

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const result = document.getElementById('cliche-text');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  
  if(isNaN(value) || value < 0 || value > 9){
    result.innerHTML = `<p class='result'>${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText.map(function(item){
      return `<p class='result'>${item}</p>`
    }).join('');
    result.innerHTML = tempText;
  }
})

