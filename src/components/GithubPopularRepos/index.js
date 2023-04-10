import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activeTab: 'ALL', listOf: '', status: 'loading'}

  componentDidMount() {
    this.getDetails()
  }

  onSuccess = () => {
    console.log('success')
  }

  onFailure = props => {
    console.log(props)
  }

  getDetails = async () => {
    const {activeTab} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeTab}`,
    )
    const data = await response.json()
    if (response.ok) {
      this.setState({status: 'success', listOf: data})
    } else {
      this.setState({status: 'failure'})
    }
  }

  onChangeTab = props => {
    this.setState({activeTab: props}, this.getDetails)
  }

  loading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  success = () => {
    const {listOf} = this.state
    const newArr = listOf.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))
    return (
      <ul className="second-card">
        {newArr.map(each => (
          <RepositoryItem key={each.id} item={each} />
        ))}
      </ul>
    )
  }

  failure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-para">Something Went Wrong</p>
    </div>
  )

  getStatus = () => {
    const {status} = this.state
    switch (status) {
      case 'success':
        return this.success()
      case 'failure':
        return this.failure()
      case 'loading':
        return this.loading()
      default:
        return null
    }
  }

  render() {
    const {activeTab} = this.state
    return (
      <div className="cont">
        <h1 className="heading">Popular</h1>
        <ul className="card-cont">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              item={each}
              onChangeTab={this.onChangeTab}
              active={activeTab === each.id}
            />
          ))}
        </ul>
        {this.getStatus()}
      </div>
    )
  }
}
export default GithubPopularRepos
