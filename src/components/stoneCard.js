import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import stoneStyles from './stoneCard.module.css'
import {graphql} from 'gatsby'
//  {
// 
class StoneCard extends Component{


    nameDisplay = (name) =>{
        // upper case the first letter
        // replace - with space
        let nuName = name
        let final
        if (nuName.includes('-')){
            let splitted = nuName.split('')
            let index = splitted.indexOf("-")
            let upped = splitted[index + 1].toUpperCase()
            splitted.splice(index, 2, ' ', upped)
            return this.nameDisplay(splitted.join(''))
        } else {
             
            let uppedLet = nuName.charAt(0).toUpperCase()
            let splitted = nuName.split('')
            splitted.splice(0, 1, uppedLet)
            final = splitted.join('')
        }
        return final 
    }

    getPicture = () => {
        console.log('experimenting')
        let sinkDirectories = [
            "singlebowlpics",
            "apronpics",
            "barpics",
            "compliantpics",
            "doublebowlpics",
            "duragranitpics",
            "handmadepics",
            "vanitypics"
        ]
        let stoneName = this.props.name
        let directory = this.props.location
        let fileType
        if(sinkDirectories.includes(this.props.location)){
            fileType = "jpg";
        } else {
            fileType = "png"
        }
        return require(`../${directory}/${stoneName}.${fileType}`)
         
    }
    render(){
        return (
            <div className={stoneStyles.singleCard}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.getPicture()} style={{width: "100%"}}/>

                    <Card.Body>
                    <Card.Title>{this.nameDisplay(this.props.name)}</Card.Title> 
                    </Card.Body>
                </Card>
            </div>
        )
    }
    
}

export default StoneCard

