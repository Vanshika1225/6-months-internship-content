export  function createConnection(serverURL,roomId){
    return{
        connect(){
            console.log("Connection is created at serverURL :"+serverURL + "roomId :"+roomId+"....")
        },
        disconnect(){
            console.log("Connection is disconnected from serverURL :"+serverURL + "roomId :"+roomId+"....")
        }
    };
}