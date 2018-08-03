import React, { Component } from 'react'
import PageHeader from '../template/pageheader'

export default class Todo extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <PageHeader name='Sobre' small='Nós' />
                <h2>Nossa História</h2>
                <p>Lorem Ipsum</p>
                <h2>Missão e Valores</h2>
                <p>Lorem Ipsum</p>
                <h2>Imprensa</h2>
                <p>Lorem Ipsum</p>
            </div>
        )
        
    }

}