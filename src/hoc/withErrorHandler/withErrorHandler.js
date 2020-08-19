import React, { Component } from 'react'
import Auxilliary from '../Auxilliary/auxilliary'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		}
		constructor(){
			super();
			//Use Constructor instead
			this.reqInterceptor = axios.interceptors.request.use(req=>{
				this.setState({error:null});
				return req;
			});

			this.resInterceptor = axios.interceptors.response.use(res => res,error=>{
				this.setState({error:error});
			});
		}

		componentWillUnmount(){
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}
		errorConfirmedHandler = () => {
			this.setState({error: null});
		}
		render(){
			return (
				<div>
					<Auxilliary>
						<Modal show={this.state.error}
								modalClosed={this.errorConfirmedHandler}>
							{this.state.error ? this.state.error.message : null}
						</Modal>
						<WrappedComponent {...this.props} />
					</Auxilliary>
				
				</div>
			);
		}
		
	}
}

export default withErrorHandler;