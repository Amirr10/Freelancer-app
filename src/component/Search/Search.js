import React, { Component } from 'react';
import Profile from '../Profile';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import ProfileData from '../../ProfileData';

class Search extends Component {
    state = {
        fullProfile: [],
        backgroundPic: [],

        serachText: '',
        showProfile: false
    }

    componentDidMount(){
        this.getAllProfiles();
    }

    onTextChange = (e) => {
        this.setState({ serachText: e.target.value });
    }

    toggleProfile = () => {
        let doShow = this.state.showProfile;
        this.setState({ showProfile: !doShow });
    }

    getId = () => {
        const skill = this.state.serachText;
        return skill;
    }

    getAllProfiles = () => {
        let li = this.state.fullProfile;

        ProfileData.profiles.map((profile, i) =>
            li.push(profile)
        );

        this.setState({ fullProfile: li });
    }

    filterBySkillProfile = (title) => {
        const greaterThenFive = 5; 
        if(title !== 'All'){
       const filteredProfiles = ProfileData.profiles.filter((profile, i) =>
            profile.title === title
        );
        this.setState({ fullProfile: filteredProfiles });
        } else if(title === "All" && this.state.fullProfile.length < greaterThenFive){
           this.componentDidMount();
        } else {
            this.setState({ fullProfile: [] });
        }
    }

    resetFullProfileArr = () => {
        this.setState({ fullProfile: [] });
    }

    render() {
        
        return (
            <div className="textSearch">
                <TextField
                    name="searchText"
                    value={this.state.serachText}
                    onChange={this.onTextChange}
                    floatingLabelText="Enter Programmer / Data analyst / All"
                />

                <br /> 
                <RaisedButton label="Search by skills"
                    primary={true}
                    onChange={this.onTextChange}
                    onClick={() => this.filterBySkillProfile(this.state.serachText)}
                />

                <span>
                    <RaisedButton label="Show"
                        primary={true}
                        onClick={this.toggleProfile}
                        style={{ margin: '15px' }}
                    />
                </span>

            {/* Toggle the profiles menu */}
                {this.state.showProfile === true ?
                    <div>
                        {this.state.fullProfile.map((pro, i) =>

                            <Profile pic={pro.backgroundPic}
                                name={pro.fullName}
                                title={pro.title}
                                skill={pro.skill} //
                            />
                        )
                        }
                    </div> : null
                }

            </div>
        )
    }
}

export default Search;
