import { Circle } from 'better-react-spinkit'

const Loading = () => {
    return ( 
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img 
                    src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone.png" 
                    alt="loading"
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                <Circle  color="#3CBC28" size={60} />
            </div>
        </center>

     );
}
 
export default Loading;