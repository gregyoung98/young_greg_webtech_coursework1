function cipher()
{
	var plain_text = document.getElementById("message").value;
	var cipher_text = [];
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	var key=['m','u','l','n','p','r','b','c','k','g','w','y','s','t','a','z','e','o','q','f','x','h','i','j','v','d']
	
	for(var idx=0;  idx<plain_text.length; idx++)
	{
		commonindex = alphabet.indexOf(plain_text[idx]);
		if(commonindex == -1 )
		{
			cipher_text.push(plain_text[idx]);
		}
		else
		{
			var cipherletter = key[commonindex];
			cipher_text.push(cipherletter);
			//comment
		}
	}
	document.getElementById("output").innerHTML = cipher_text.join("");
}