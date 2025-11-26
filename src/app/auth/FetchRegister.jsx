export async function FetchRegisterAPI(url,data) {
    if(url){
         try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username:data.username, password:data.password, repeatpass: data.repeatpass }),
        });
        if(!response.ok) throw new Error("Register Fail")
        return response.json();
        // console.log(result);
      } catch (error) {
        console.error('Error:', error);
      }
    }
}