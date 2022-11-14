import styles from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {

  const handleChanche = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div className={styles.root} >
    <svg 
      className={styles.icon}
      version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
       viewBox="0 0 612.08 612.08">
    <g>
      <path d="M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
        c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
        c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
        M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
        S338.402,419.811,237.927,419.811z"/>
    </g>
    </svg>
    <input className={styles.input}
           value={searchValue}
           onChange={handleChanche}
           type='text'
           placeholder="Поиск пиццы..."
    />
    {
      searchValue && (
        <svg className={styles.close} 
             onClick={handleClear}
             viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z"/>
          <path d="M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z"/>
        </svg>
      )
    }

    </div>
  );
};
