import ProfileCard from "./ProfileCard";
// images can be imported as well, but in case of non-JS file, extensions are needed
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
// 이미지 파일을 import 할 때, 확장자명 필수
// 이미지의 용량이 9.7kb 이하이면 JS 파일에 base 64 형태로 Inline 됨
// 용량이 그 이상인 경우, 별도의 파일로 지정됨

import 'bulma/css/bulma.css' // node_modules 내부의 폴더는 절대경로, 상대경로 관계없이 폴더명을 지정하면 됨

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants
          </p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              {/* try to pass down props with prop names that corresponds the data that are passed down to child components */}
              <ProfileCard
                title='Alexa'
                handle="@alexa99"
                image={AlexaImage}
                description='alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa alexa ' />
            </div>
            <div className="column is-4">
              <ProfileCard
                title='Cortana'
                handle="@cortana123"
                image={CortanaImage}
                description='cortana cortana cortana cortana cortana cortana cortana cortana cortana cortana cortana cortana cortana cortana cortana cortana ' />
            </div>
            <div className="column is-4">
              <ProfileCard
                title='Siri'
                handle="@heysiri"
                image={SiriImage}
                description='siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri siri ' />
              {/* the props are automatically made into objects w/ key, value pairs */}
            </div>
          </div>
        </section>




      </div>
    </div>
  )
}

export default App;