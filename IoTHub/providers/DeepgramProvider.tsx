
const transcribeAudio = async (recording:any,platform:any) => {
  try {
    let fileUri = '';
    let formData = new FormData();
    let response;
    if(platform === 'Android'){
     
      fileUri = recording
      
    
      formData.append('audio',  fileUri);
      response = await fetch('http://192.168.1.215:8081/transcribe', {
        method: 'POST',
        body: formData,
      });
    }
    else{
      fileUri = recording
      const file = await fetch(fileUri);
      const blob = await file.blob();
      formData.append('audio', blob);
      response = await fetch('http://localhost:3002/transcribe', {
        method: 'POST',
        body: formData,
    });
    }
  
  
    
    
    
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        throw new Error(data.error);
    }
    console.log(data);
    return data.results;
  }
  catch (error) {
    console.error(error);
  }
}


export default transcribeAudio;