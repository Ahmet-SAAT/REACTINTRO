import X from "./components/01-my-house/01-my-house";
import { Armutlar, Muzlar } from "./components/01-my-house/01-my-house";
import Jsx1 from "./components/02-jsx/01-jsx";
import Jsx2 from "./components/02-jsx/02-jsx";
import Jsx3 from "./components/02-jsx/03-jsx";
import Jsx4 from "./components/02-jsx/04-jsx";
import InlineStyling from "./components/03-styles/01-inline-styling";
import InternalStyling from "./components/03-styles/02-internal-styling";
import ExternalStyling from "./components/03-styles/03-external-styling";
import ModuleStyling from "./components/03-styles/04-module-styling";
import Sass from "./components/03-styles/05-sass";
import DijitalSaatUygulamasi1 from "./components/04-dijital-saat-uygulamasi1/04-dijital-saat-uygulamasi1";
import Greetings from "./components/05-props/01-greeting";
import Children from "./components/05-props/04-children";
import DijitalSaatUygulamasi2 from "./components/06-digital-saat-uygulamasi2/06-digital-saat-uygulamasi2"
import Images from "./components/07-images/01-images";
import ImageGallery from "./components/07-images/02-image-gallery";
import ProfileCard from "./components/08-profile-card/profile-card";
import BootstrapKlasikYontem from "./components/09-bootstrap/01-bootstrap-klasik-yontem";
import BootStrapComponents from "./components/09-bootstrap/02-bootstrap-component";
import BootstrapButton from "./components/09-bootstrap/03-bootstrap-button";
import MaterialIcons from "./components/10-icons/02-material-icons";
import Events from "./components/11-event/event";
import ProductShop from "./components/12-product-shop/product-shop";
import State from "./components/13-usestate/state";
import Counter from "./components/14-counter/counter";
import Birthday from "./components/15-birthday/birthday";
import Useeffect from "./components/16-use-effect/useeffect";
import CounterTitle from "./components/17-counter-title.js/counter-title";
import DigitalSaatUygulamasi3 from "./components/18-digital-saat3/digital-saat-uygulamasi3";
import ClassTypeComponent from "./components/20-component-types/01-class-type-component";
import FunctionTypeComponent from "./components/20-component-types/02-function-type-component";
import Fetch2 from "./components/21-fetch/02-fetch";
import UserCard from "./components/21-fetch/02-user-card";
import Fetch1 from "./components/21-fetch/fetch";
import Countries from "./components/22-axios/countries";
import ParentComponent from "./components/23-lift-state/parent-component";

import Form1 from "./components/24-form/01-form";
import Form2 from "./components/24-form/02-form";
import Form3 from "./components/24-form/03-form";
import Form4 from "./components/24-form/04-form";
import Form5 from "./components/24-form/05-form";
import FormikYup1 from "./components/25-formik-yup/01-formik-yup";
import FormikYup2 from "./components/25-formik-yup/02-formik-yup";

const App = () => {
  return (
    <div>
      <X />
      <Armutlar />
      <Muzlar />
      <Jsx1 />
      <Jsx2 />
      <Jsx3 />
      <Jsx4 />
      <InlineStyling />
      <InternalStyling />
      <ExternalStyling />
      <ModuleStyling />
      <Sass />
      <DijitalSaatUygulamasi1 />
      <Greetings />
      <Children>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        nesciunt eos facere et repellendus quasi ipsam ab tempore earum porro
        saepe sapiente nemo asperiores, cupiditate nobis officiis modi, quas
        minus!
      </Children>

      <DijitalSaatUygulamasi2 color="white" backgroundColor="red" />
      <Images />
      <ImageGallery />
      <ProfileCard
        src="profile-card.jpg"
        name="Walker"
        location="Nashville, Tenesse"
        statistics={[
          {
            stat: 2,
            title: "Shot",
          },
          {
            stat: 300,
            title: "Followers",
          },
          {
            stat: 150,
            title: "Following",
          },
        ]}
      />

      <ProfileCard
        src="profile.jpg"
        name="Zisan"
        location="Istanbul, Turkey"
        statistics={[
          {
            stat: 8,
            title: "Shot",
          },
          {
            stat: 1000,
            title: "Followers",
          },
          {
            stat: 50,
            title: "Following",
          },
        ]}
      />
      <BootstrapKlasikYontem />
      <BootStrapComponents />
      <BootstrapButton variant="outline-primary" disabled />
      <MaterialIcons />
      <Events />
      <ProductShop />
      <State />
      <Counter />
      <Birthday />
      <Useeffect />
      <CounterTitle />
      <DigitalSaatUygulamasi3 />
      <FunctionTypeComponent />
      <ClassTypeComponent />
      <Fetch1 />
      <Fetch2 />
      <UserCard />
      <Countries />
      <ParentComponent />

      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
      <FormikYup1 />
      <FormikYup2 />
    </div>
  );
};

export default App;
