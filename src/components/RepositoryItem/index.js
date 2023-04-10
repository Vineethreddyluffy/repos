import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {avatarUrl, forksCount, starsCount, name, issuesCount} = item
  return (
    <li className="list-item">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <h1 className="name">{name}</h1>
      <div className="img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars"
        />
        <p className="para">{starsCount} stars</p>
      </div>
      <div className="img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="forks"
        />
        <p className="para">{forksCount} forks</p>
      </div>
      <div className="img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="issues"
        />
        <p className="para">{issuesCount} issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
