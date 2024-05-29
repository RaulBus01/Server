const FileSaverAudio = async(data:any) => {
    try {
        
        const blob = new Blob([data]);
        return blob;
    } catch (error) {
        console.error(error);
    }
}

export default FileSaverAudio;
