import { people } from './data/data.js';
import { getImageUrl } from './utils/utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

const App = () => {
const a = 'hi';
const b = 'bye';
const value = useMemo(() => ({a, b}), [a, b]);

  return (
 <AppContext.Provider value={value}>
 <ComponentA />
 </AppContext.Provider>
 );
};

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => {
const contextValue = useContext(AppContext);
 return null;
};