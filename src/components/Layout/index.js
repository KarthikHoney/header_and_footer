import './index.css'

const Layout = () => (
  <div className="layout-container">
    <h1>Layout</h1>
    <div>
      <label htmlFor="content">content</label>
      <input type="checkbox" id="content" />
    </div>
    <div>
      <label htmlFor="left">Left menu</label>
      <input type="checkbox" id="left" />
    </div>
    <div>
      <label htmlFor="right">Right menu</label>
      <input type="checkbox" id="right" />
    </div>
  </div>
)
export default Layout
