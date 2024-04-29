import Props from "../Componen/Props";
import Daftar from "../Componen/Daftar";

const IndukProps = () => {
    const name = "jibran";
    const number = 10;

    const DaftarBuku = ["BUKU IPA",
                        "BUKU IPS", 
                        "BUKU PENJAS"]
    const DaftarBuku2 = ["BUKU NOVEL",
                        "BUKU CERITA", 
                        "BUKU MTK"]
    
    const DaftarSiswa = {"name" : "JIBRAN",
                        "number" : 10,
                        "siswa" : true}
    const DaftarSiswa2 = {"name" : "UMAM",
                        "number" : 10,
                        "siswa" : false}
    const DaftarSiswa3 = {"name" : "MAKHRUF",
                        "number" : 10,
                        "siswa" : true}
    return ( 
        <> 
        <Daftar DaftarBuku={DaftarBuku} DaftarBuku2={DaftarBuku2}/>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa}/>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa2}/>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa3}/>
        
            {/*<Props 
            name={name}
            number={number}
            siswa={true}/>
            <hr/>
            <Props 
            name="JIBRAN"
            number={10}
    siswa={true}/>*/}
        </>
    );
}
 
export default IndukProps;