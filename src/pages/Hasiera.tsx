import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToggle, IonToolbar, ToggleChangeEventDetail, useIonAlert, useIonRouter } from '@ionic/react';
import { moon } from 'ionicons/icons';
import { useState } from 'react';
import './Hasiera.css';

const Hasiera: React.FC = () => {
  const router = useIonRouter();

  const [hasiera, setHasiera] = useState('');
  const [helmuga, setHelmuga] = useState('');

  const [present] = useIonAlert();

  const emaitzaKargatu = () => {
    if (hasiera !== '' && helmuga !== '') {
      router.push('/emaitza/'+encodeURIComponent(hasiera)+'/'+encodeURIComponent(helmuga), "forward");
    } else {
      present({
        header: 'Errorea',
        message: 'Hasiera eta helmuga eremuak bete behar dira',
        buttons: [
          { text: 'Ok' }
        ]
      });
    }
  }

  const darkModeEnabled = document.body.classList.contains('dark');

  const toggleDarkModeHandler = (ev: CustomEvent<ToggleChangeEventDetail<any>>) => {
    console.log(ev.detail.checked);
    document.body.classList.toggle("dark", ev.detail.checked);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonTitle>Hasiera</IonTitle>
            <IonList>
              <IonItem lines="none">
                <IonIcon
                  slot="start" icon={moon} className="component-icon component-icon-dark" />
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle slot="end" name="darkMode" onIonChange={(event) => toggleDarkModeHandler(event)} checked={darkModeEnabled}/>
              </IonItem>
            </IonList>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonList>
            <IonItem>
              <IonInput type='text'  placeholder='Hasiera'
               value={hasiera} onIonChange={(e: any) => setHasiera(e.target.value)}/>
            </IonItem>
            <IonItem>
              <IonInput type='text' placeholder='Helmuga'
              value={helmuga} onIonChange={(e: any) => setHelmuga(e.target.value)}/>
            </IonItem>
          </IonList>
          <IonButton color="primary" onClick={emaitzaKargatu}>
            Bilatu
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Hasiera;
