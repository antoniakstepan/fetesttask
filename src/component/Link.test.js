import renderer from 'react-test-renderer';
import { Link } from './Link';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link to='geordan.aaryn@fallinhay.com' name='geordan.aaryn@fallinhay.com'/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});