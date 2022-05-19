import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonToggle, ToggleChangeEventDetail } from '@ionic/react';
import * as L from 'leaflet';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Aukera, IbilbideMota} from '../models/models';
import { bus, moon } from "ionicons/icons";
import './Emaitza.css';
import 'leaflet/dist/leaflet.css';
import { Zutabea } from '../components/Zutabea';
import { map, setMap } from '../laguntzaileak/Mapa';

// Scrapping zerbitzua probatzeko
export async function test(from: string, to: string) {
  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await sleep(2000);
  return JSON.parse('[{"id":"65c985e07a583","pref":"Bus","iterazioak":[{"img":"Bus","text":"A0651"},{"img":"Bus","text":"ALSA"},{"img":"Walk","text":""},{"img":"Bus","text":"13"},{"img":"Bus","text":"13"},{"img":"Bus","text":"25"},{"img":"Walk","text":""}],"denbora":{"hasiera":"21:22","amaiera":"00:16","iraupena":"00:02:54"},"xehetasunak":{"informazioa":" 9:22 PM from Lusa (1207) ","ibilbideak":[{"id":0,"izena":"A0651","helmuga":"Bilbao","enpresa":"BizkaiBus","mota":0,"kokapenak":{"hasiera":"Lusa (1207)","amaiera":"Bilbao Intermodal"},"denbora":{"hasiera":"21:22","amaiera":"22:05"}},{"id":2,"izena":"ALSA","helmuga":"Paris Valenton","enpresa":"ALSA","mota":0,"kokapenak":{"hasiera":"Bilbao (Bus Station)","amaiera":"Estación de Autobuses de San Sebastian"},"denbora":{"hasiera":"22:15","amaiera":"23:15"}},{"id":4,"izena":"13","helmuga":"Martillun","enpresa":"","mota":0,"kokapenak":{"hasiera":"Askatasuna 21","amaiera":"Jai Alai"},"denbora":{"hasiera":"23:32","amaiera":"23:38"}},{"id":6,"izena":"13","helmuga":"Boulevard 3","enpresa":"","mota":0,"kokapenak":{"hasiera":"Jesuitak","amaiera":"Boulevard 3"},"denbora":{"hasiera":"23:46","amaiera":"23:51"}},{"id":8,"izena":"25","helmuga":"Errekalde II","enpresa":"","mota":0,"kokapenak":{"hasiera":"Boulevard 17","amaiera":"Unibertsitatea Elhuyar"},"denbora":{"hasiera":"00:00","amaiera":"00:11"}}]}},{"id":"c84147f74b90e8","pref":"Bus","iterazioak":[{"img":"Bus","text":"A0651"},{"img":"Bus","text":"A0651"},{"img":"Bus","text":"A3247"},{"img":"Bus","text":"DO50B"},{"img":"Walk","text":""},{"img":"Bus","text":"5"},{"img":"Bus","text":"25"},{"img":"Walk","text":""}],"denbora":{"hasiera":"20:05","amaiera":"00:19","iraupena":"00:04:14"},"xehetasunak":{"informazioa":" 8:05 PM from Lusa (1207) ","ibilbideak":[{"id":0,"izena":"A0654","helmuga":"Gurutzeta/cruces","enpresa":"","mota":0,"kokapenak":{"hasiera":"Lusa (1207)","amaiera":""},"denbora":{"hasiera":"20:05","amaiera":"20:18"}},{"id":1,"izena":"A3341","helmuga":"Bilbao","enpresa":"","mota":0,"kokapenak":{"hasiera":"Iorgi (1563)","amaiera":""},"denbora":{"hasiera":"20:32","amaiera":"21:00"}},{"id":2,"izena":"A3247","helmuga":"Aireportua","enpresa":"","mota":0,"kokapenak":{"hasiera":"Bilbao Intermodal","amaiera":""},"denbora":{"hasiera":"21:00","amaiera":"21:36"}},{"id":3,"izena":"DO50B","helmuga":"Iñurritza","enpresa":"","mota":0,"kokapenak":{"hasiera":"Aeropuerto Bilbao","amaiera":"Donostiako Autobus Geltokia"},"denbora":{"hasiera":"21:45","amaiera":"22:58"}},{"id":5,"izena":"5","helmuga":"Boulevard 17","enpresa":"","mota":0,"kokapenak":{"hasiera":"Askatasuna 31","amaiera":""},"denbora":{"hasiera":"23:18","amaiera":"23:22"}},{"id":6,"izena":"25","helmuga":"Errekalde II","enpresa":"","mota":0,"kokapenak":{"hasiera":"Boulevard 17","amaiera":"Berio 22"},"denbora":{"hasiera":"00:00","amaiera":"00:12"}}]}},{"id":"9f5d751f8ca84","pref":"Bus","iterazioak":[{"img":"Train","text":"Bilbao-Balmaseda"},{"img":"Walk","text":""},{"img":"Bus","text":"ALSA"},{"img":"Walk","text":""},{"img":"Bus","text":"13"},{"img":"Bus","text":"13"},{"img":"Bus","text":"25"},{"img":"Walk","text":""}],"denbora":{"hasiera":"21:09","amaiera":"00:16","iraupena":"00:03:07"},"xehetasunak":{"informazioa":" 9:09 PM from Zalla ","ibilbideak":[{"id":0,"izena":"Bilbao-Balmaseda","helmuga":"Bilbao","enpresa":"RENFE RAM","mota":1,"kokapenak":{"hasiera":"Zalla","amaiera":"Basurto"},"denbora":{"hasiera":"21:09","amaiera":"21:53"}},{"id":2,"izena":"ALSA","helmuga":"Paris Valenton","enpresa":"","mota":0,"kokapenak":{"hasiera":"Bilbao (Bus Station)","amaiera":"Estación de Autobuses de San Sebastian"},"denbora":{"hasiera":"22:15","amaiera":"23:15"}},{"id":4,"izena":"13","helmuga":"Martillun","enpresa":"","mota":0,"kokapenak":{"hasiera":"Askatasuna 21","amaiera":"Jai Alai"},"denbora":{"hasiera":"23:32","amaiera":"23:38"}},{"id":6,"izena":"13","helmuga":"Boulevard 3","enpresa":"","mota":0,"kokapenak":{"hasiera":"Jesuitak","amaiera":"Boulevard 3"},"denbora":{"hasiera":"23:46","amaiera":"23:51"}},{"id":8,"izena":"25","helmuga":"Errekalde II","enpresa":"","mota":0,"kokapenak":{"hasiera":"Boulevard 17","amaiera":"Unibertsitatea Elhuyar"},"denbora":{"hasiera":"00:00","amaiera":"00:11"}}]}},{"id":"88f7df16874048","pref":"Train","iterazioak":[{"img":"Walk","text":""},{"img":"Train","text":"Santander-Bilbao"},{"img":"Walk","text":""},{"img":"Bus","text":"ALSA"},{"img":"Walk","text":""},{"img":"Bus","text":"13"},{"img":"Bus","text":"13"},{"img":"Bus","text":"25"},{"img":"Walk","text":""}],"denbora":{"hasiera":"21:21","amaiera":"00:16","iraupena":"00:02:55"},"xehetasunak":{"informazioa":" 9:27 PM from Mimetiz ","ibilbideak":[{"id":1,"izena":"Santander-Bilbao","helmuga":"Bilbao","enpresa":"","mota":1,"kokapenak":{"hasiera":"Mimetiz","amaiera":"Basurto"},"denbora":{"hasiera":"21:27","amaiera":"22:00"}},{"id":3,"izena":"ALSA","helmuga":"Paris Valenton","enpresa":"","mota":0,"kokapenak":{"hasiera":"Bilbao (Bus Station)","amaiera":"Estación de Autobuses de San Sebastian"},"denbora":{"hasiera":"22:15","amaiera":"23:15"}},{"id":5,"izena":"13","helmuga":"Martillun","enpresa":"","mota":0,"kokapenak":{"hasiera":"Askatasuna 21","amaiera":"Jai Alai"},"denbora":{"hasiera":"23:32","amaiera":"23:38"}},{"id":7,"izena":"13","helmuga":"Boulevard 3","enpresa":"","mota":0,"kokapenak":{"hasiera":"Jesuitak","amaiera":"Boulevard 3"},"denbora":{"hasiera":"23:46","amaiera":"23:51"}},{"id":9,"izena":"25","helmuga":"Errekalde II","enpresa":"","mota":0,"kokapenak":{"hasiera":"Boulevard 17","amaiera":"Unibertsitatea Elhuyar"},"denbora":{"hasiera":"00:00","amaiera":"00:11"}}]}},{"id":"efac37017e11b8","pref":"Train","iterazioak":[{"img":"Train","text":"Bilbao-Balmaseda"},{"img":"Walk","text":""},{"img":"Train","text":"E1"},{"img":"Walk","text":""}],"denbora":{"hasiera":"22:48","amaiera":"08:53","iraupena":"00:10:05"},"xehetasunak":{"informazioa":" 10:48 PM from Zalla ","ibilbideak":[{"id":0,"izena":"Bilbao-Balmaseda","helmuga":"Bilbao","enpresa":"RENFE RAM","mota":1,"kokapenak":{"hasiera":"Zalla","amaiera":"Bilbao-Abando station"},"denbora":{"hasiera":"22:48","amaiera":"23:39"}},{"id":2,"izena":"E1","helmuga":"Amara-donostia","enpresa":"Euskotren","mota":1,"kokapenak":{"hasiera":"Casco Viejo","amaiera":"Lugaritz"},"denbora":{"hasiera":"05:58","amaiera":"08:35"}}]}},{"id":"89eafda922b97","pref":"Tram","iterazioak":[{"img":"Walk","text":""},{"img":"Train","text":"Santander-Bilbao"},{"img":"Walk","text":""},{"img":"Bus","text":"DO01"},{"img":"Walk","text":""},{"img":"Bus","text":"Zumaia>Getaria>Zarautz>Donostia"},{"img":"Walk","text":""}],"denbora":{"hasiera":"21:21","amaiera":"06:36","iraupena":"00:09:15"},"xehetasunak":{"informazioa":" 9:27 PM from Mimetiz ","ibilbideak":[{"id":1,"izena":"Santander-Bilbao","helmuga":"Bilbao","enpresa":"RENFE RAM","mota":1,"kokapenak":{"hasiera":"Mimetiz","amaiera":"Basurto"},"denbora":{"hasiera":"21:27","amaiera":"22:00"}},{"id":3,"izena":"DO01","helmuga":"Iñurritza","enpresa":"LURRALDEBUS TRANSPORTES PESA S.A.","mota":0,"kokapenak":{"hasiera":"Bilboko Autobus Geltokia","amaiera":"Suhiltzaileen Biribilgunea"},"denbora":{"hasiera":"22:30","amaiera":"23:27"}},{"id":5,"izena":"Zumaia>Getaria>Zarautz>Donostia","helmuga":"Tolosa Hiribidea - Lorea","enpresa":"","mota":0,"kokapenak":{"hasiera":"San Pelayo","amaiera":"Tolosa Hiribidea, 77 - Unibertsitateak"},"denbora":{"hasiera":"06:16","amaiera":"06:30"}}]}}]')
}

const Emaitza: React.FC = () => {
  const { hasiera, helmuga } = useParams<{ hasiera: string, helmuga: string }>();

  const darkModeEnabled = document.body.classList.contains('dark');
  const toggleDarkModeHandler = (ev: CustomEvent<ToggleChangeEventDetail<any>>) => {
    document.body.classList.toggle("dark", ev.detail.checked);
  };
  
  useEffect(() => {
    setMap(L.map('map', {
      center: [43.3, -2],
      zoom: 10,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    }));
    setTimeout(() => { 
      map.invalidateSize(); 
    }, 250);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/hasiera" />
            <IonTitle>Emaitza</IonTitle>
            <IonList>
              <IonItem lines="none">
                <IonIcon
                  slot="start" icon={moon} className="component-icon component-icon-dark" />
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle slot="end" name="darkMode" onIonChange={(event: CustomEvent<ToggleChangeEventDetail<any>>) => toggleDarkModeHandler(event)} checked={darkModeEnabled}/>
              </IonItem>
            </IonList>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid class="all-height">
          <IonRow class="all-height">
            <IonCol size="4">
              <Zutabea hasiera={decodeURIComponent(hasiera)} helmuga={decodeURIComponent(helmuga)} />
            </IonCol>
            <IonCol size="8">
              <div id="map" className="all-height"></div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
//#endregion

export default Emaitza;