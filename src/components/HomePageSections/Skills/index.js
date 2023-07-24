import styles from './Skills.module.scss';
import Title from '@/components/Title';
import ScopeSkill from '@/components/ScopeSkill';
import {SKILLS_DATA} from '@/data/skills';

const Skills = () =>
  <div className={`${styles.skills} section`}>
    <Title title={'Навыки'}/>
    <div className={styles.scopeSkillsWrapper}>
      {SKILLS_DATA.map(scopeSkill =>
        <ScopeSkill data={scopeSkill} key={scopeSkill.title}/>
      )}
    </div>
  </div>;

export default Skills;