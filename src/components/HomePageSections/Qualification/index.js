import Title from '@/components/Title';
import ScopeQualification from '@/components/ScopeQualification';
import {QUALIFICATION_DATA} from '@/data/qualification';
import styles from './Qualification.module.scss';

const Qualification = () => {
  return (
    <div className={`${styles.qualification} section`}>
      <Title title={'Квалификация'}/>
      <div className={styles.scopesWrapper}>
        {QUALIFICATION_DATA.map(({name, title, arrayCard}) =>
          <ScopeQualification key={name} title={title} iconName={name} dataCard={arrayCard}/>
        )}
      </div>
    </div>
  );
};

export default Qualification;