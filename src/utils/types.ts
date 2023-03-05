type Map = {
    lhs: string;
    rhs: string;
}


export type User = {
    displayName: string;
    username: string;
id: string;
accessToken: string;
key: string;
    plugins: Object
    keymappings: Array<Map>
}
