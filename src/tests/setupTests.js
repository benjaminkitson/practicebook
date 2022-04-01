import Enzyme from 'enzyme';
import Adapter from 'enzyme-adaoter-react-17';

Enzyme.configure({
  adapter: new Adapter()
});
