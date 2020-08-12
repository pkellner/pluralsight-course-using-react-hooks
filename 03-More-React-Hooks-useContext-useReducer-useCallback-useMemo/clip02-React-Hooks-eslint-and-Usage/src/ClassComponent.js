class ClassComponent extends React.Component {
  render() {
    // linting rule catches this, even class components!
    const [x, setX] = useState(0);

    return <h2>Hi, I'm React Class Component!</h2>;
  }
}

export default ClassComponent;
