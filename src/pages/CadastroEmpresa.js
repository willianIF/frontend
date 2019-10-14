import React, { Component } from 'react';
import './css/CadastroEmpresa.css';
import axios from 'axios';
import { Button, Jumbotron, Container, Navbar, Col, Form, } from 'react-bootstrap';
const APIempresaInserir = 'http://localhost:3001/inserirEmpresa';

export default class CadastroEmpresa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            act: 0,
            index: '',
        }
    }

    cadastrar = (event) => {
        event.preventDefault();

        const obj = {
            nome_empresa: this.refs.nome.value,
            CNPJ: this.refs.CNPJ.value,
            endereco_empresa: this.refs.endereco.value,
            bairro_empresa: this.refs.bairro.value,
            email_empresa: this.refs.email.value,
            telefone_empresa: this.refs.telefone.value,
        };

        if (obj.nome_empresa === "" || obj.CNPJ === "" || obj.endereco_empresa === "" || obj.bairro_empresa === "" || obj.email_empresa === "" || obj.telefone_empresa === "") {
            alert("Campo(s) não preenchidos!");
        } else {

            axios.post(APIempresaInserir, obj);

            this.refs.form.reset();
            this.refs.nome.focus();
        }
    }

    render() {
        return (
            <Jumbotron className="container-lista">
                <Container className="box-nav">
                    <Navbar bgh="ligth" expand="lg" className="barra-login shadow">
                        <h1>Cadastro de Empresa</h1>
                    </Navbar>
                </Container>
                <Container className="box-lista shadow">
                <Container>
                                <Form ref="form">
                                    <Form.Group>
                                        <Form.Label><p className="p-form">Nome</p></Form.Label>
                                        <Form.Control type="text" name="nome" ref="nome" placeholder="Nome da empresa" required="required"></Form.Control>

                                        <Form.Label><p className="p-form">E-mail</p></Form.Label>
                                        <Form.Control type="email" name="email" ref="email" placeholder="exemplo@exemplo.com" required="required"></Form.Control>
                                    </Form.Group>

                                    <Form.Row>
                                        <Col>
                                            <Form.Label><p className="p-form">CNPJ</p></Form.Label>
                                            <Form.Control type="text" name="CNPJ" ref="CNPJ" placeholder="00.000.000/0000-00" required="required"></Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label><p className="p-form">Endereço</p></Form.Label>
                                            <Form.Control type="text" name="endereco" ref="endereco" placeholder="Endereço da empresa" required="required"></Form.Control>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Label><p className="p-form">Telefone</p></Form.Label>
                                            <Form.Control type="text" name="telefone" ref="telefone" placeholder="Telefone da empresa" required="required"></Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label><p className="p-form">Bairro</p></Form.Label>
                                            <Form.Control type="text" name="bairro" ref="bairro" placeholder="Bairro da empresa" required="required"></Form.Control>
                                        </Col>
                                    </Form.Row>
                                    <Container className="text-center">
                                        <Button variant="btn btn-estagia" onClick={(e) => this.cadastrar(e)}>Salvar</ Button>
                                    </Container>
                                </Form>
                            </Container>
                </Container>
            </Jumbotron>
        );
    }
}