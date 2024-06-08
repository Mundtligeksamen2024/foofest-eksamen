const { createRoot } = ReactDOM;

const {  Breadcrumb  } = antd;
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
const ComponentDemo = App;


createRoot(mountNode).render(<ComponentDemo />);
