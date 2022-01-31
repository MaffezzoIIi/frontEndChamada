import React, { FormEvent, useState } from "react";
import api from "../../service/api";
import { Hud, Container, SideCadastro, Lista, PopupModal, CntP, PopUp} from "./style";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';


interface Aluno{
	matricula: number;
	nome: string;
}

const Chamada: React.FC = () => {
	const history = useHistory();
	const [matricula, setMatricula] = useState('');
	const [nome, setNome] = useState('');

	const [alunos, setAlunos] = useState<Aluno[]>([]);

	async function buscarAlunos() {
		await api.get<Aluno[]>('/aluno').then((response) => {
			setAlunos(response.data);
		});
	
	};
	
	console.log(alunos);

	async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void>{
		try {
			console.log(matricula, nome);
			const Aluno = {
				matricula: matricula,
				nome: nome,
			}			

			await api.post('/aluno', Aluno);
			history.push('/');

			(document.getElementById('matricula') as HTMLInputElement).value='';
			(document.getElementById('nome') as HTMLInputElement).value='';
		} catch (error) {
			console.log(error)
		}
		buscarAlunos();
	};

	useEffect(() => {
		buscarAlunos();
	}, [])

	async function editarNome(matricula:number, index: number) {
		const Aluno = {
			matricula: matricula,
			nome: (document.getElementById('editar'+index) as HTMLInputElement).value,
		}	

		await api.put('/aluno', Aluno);
		document.location.reload();
	}

	async function removerAluno(matricula:number) {
		await api.delete(`/aluno/${matricula}`);
		document.location.reload();
	}
	
	async function chamada() {
		alunos.forEach((element, index) => {
			const Frequencia = {
				presente: (document.getElementById('input'+index) as HTMLInputElement).checked,
				matricula: element.matricula,
			}
			
			api.put('/frequencia', Frequencia);

			console.log(Frequencia);
		})
	}


	return (
		<div>
				<Hud>
					<h1>Escola - Chamada</h1>
				</Hud>
				<Container>
					<SideCadastro>
						<form onSubmit={handleSubmit}>
							<h1>Cadastrar</h1>
							<div>
								<label >Informe a matrícula: </label>
								<input  id='matricula' onChange={e => setMatricula(e.target.value)} type="number" />
							</div>
							<div>
								<label>Informe o nome: </label>
								<input id='nome' onChange={e => setNome(e.target.value)} type="text" />
							</div>
							<button type="submit">Cadastrar</button>
						</form>
					</SideCadastro>
					<Lista>
							<div>
								<div className="hud">
									<p>NOME</p>
									<p>MATRÍCULA</p>
									<p>PRESENÇA</p>
									<p>EDITAR</p>
									<p>EXCLUIR</p>
								</div>
								{alunos && alunos.length > 0 ? alunos.map((element, index) => (
								<div className="elements" key={index}> 
									<p>{element.nome}</p>
									<p>{element.matricula}</p>
									<p><input id={`input${index}`} type="checkbox"/></p>
									<PopupModal closeOnEscape trigger={<p><AiOutlineEdit /></p>} modal>
										{(close: any) => (
											<CntP>
												<PopUp>
													<div>
														<label htmlFor="">Nome: </label>
														<input id={`editar${index}`} type="text" />
														<button onClick={() => {editarNome(element.matricula, index)}}>Enviar</button>
													</div>
												</PopUp>	
											</CntP>
										)}
									</PopupModal>
									<p onClick={() => {removerAluno(element.matricula)}}><FiTrash2 /></p>
								</div>
								)): ''} 
							</div>
							<div className="botao">
								<button onClick={() => {chamada()}}>Enviar</button>
							</div>
					</Lista>
				</Container>
		</div>
	);
}

export default Chamada;
