import React from 'react'


class Estado extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            estado0: 'Geração iniciada',
            estado1: 'Geração finalizada',
            estado2: 'Registro iniciado',
            estado3: 'Registro finalizado',
            estado4: 'Revogação iniciada',
            estado5: 'Revogação finalizada',
            isVisorActive: false,
        };
    }

    toggleVisor = () => {
        this.setState({
            isVisorActive: !this.state.isVisorActive
        })
    }
    show = () => {
        alert(this.state.estado5);
        }

    
    renderActionButton = () => {
        if(this.state.isVisorActive){
            return(

                <div className="estado">
                    <input type="text" value="Documento"/>
                    <h2 className="revg">Iniciar revogação?</h2>
                    <div className="button">
                    <button className="rev" onClick={this.show}>Sim
                    </button>
                    <br/>
                    <button
                     className="visor_action-button"
                    onClick={this.toggleVisor}> voltar
                    </button>
                    </div>
                    <div className="container">
                        <p>Status:</p>
                        -{this.state.estado0} <br/>
                        -{this.state.estado1} <br/>
                        -{this.state.estado2} <br/>
                       -{this.state.estado3} <br/>
                        <br/>
                    </div>
                </div>
                
            )
        } 
        
        return (
            <button
            className="visor_action-button"
            onClick={this.toggleVisor}> Iniciar Geração
            </button>
            
        )
    }

    render() {
        return(
            <div className="Modal1">
                <div className="visor"
                style={{ height: this.state.isVisorActive ? '420px': null}}>
                    {this.renderActionButton()}
                </div>
            </div>
        );
    }
}
export default Estado;