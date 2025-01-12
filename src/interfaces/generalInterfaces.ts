export interface PresentationProps{
    path: string;
    title: string;
    subtitle: string;
    pdfFile: string;
}

export interface BooleanState{
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MesLink{
    link: string;
    nomeMes: string;
}

enum TipoOperacao{
    IN = "Entrada",
    OUT = "Saida"
}
enum TipoCategoria{
    SAL_FIXO = "Salário fixo de Trabalho",
    SAL_VAR = "Pagamento variável por trabalho",
    CONTA = "Contas a Pagar",
    ALIMENTO = "Gastos com comidas",
    DIVERSAO = "Gastos com sair, passear, comer"
}
export enum TipoOrganizacao{
    DATA = "Ordenar por Data",
    INxOUT = "Entradas X Saidas",
}

export interface InputFinanceiro{
    data: Date;
    tipoOperacao: TipoOperacao;
    categoria: TipoCategoria;
    nomeOperacao: string;
    valor: number;
}