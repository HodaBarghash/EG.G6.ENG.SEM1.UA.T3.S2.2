function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OQkYsGTj4u":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v21q1attempts:player.GetVar("v21q1attempts"),v21q1answeredcorrect:player.GetVar("v21q1answeredcorrect"),v21q2attempts:player.GetVar("v21q2attempts"),v21q2answeredcorrect:player.GetVar("v21q2answeredcorrect"),v21q3attempts:player.GetVar("v21q3attempts"),v21q3answeredcorrect:player.GetVar("v21q3answeredcorrect")})
	}
	)
}

