import { Text, View, Image } from "react-native";
import {global} from "../../css/Styles.js"

export default function Header() {
    return (
        <View style={global.header}>
            <View style={global.title}>
                <Text style={global.txtbank}>PagBank</Text>
                <Image source={require ("../../assets/arrow.png")} style={global.arrow} />
                <Image source={require ("../../assets/notification.png")} style={global.notification} /> 
            </View>

            <Text style={global.txtdisponivel}> Saldo disponível </Text>

            <View style={global.saldo}>
                <Text style={global.txtsaldodinheiro}>R$ 2.500,00 </Text>
                <Image source={require ("../../assets/eye.png")} style={global.eye} />
            </View>

            <View style={global.bloqrec}>
                <Text style={global.txtbloq}>Bloqueado</Text>
                <Text style={global.txtrec}>A receber</Text>
            </View>

            <View style={global.dinheirobloqrec}>
                <Text style={global.dinheirobloq}>R$20,65</Text>
                <Text style={global.dinheirorec}>R$1.200,34</Text>
                <Image source={require ("../../assets/help.png")} style={global.help} />
            </View>

            <View style={global.cashback}>
                <Text style={global.txtcashback}>Cashback últimos 30 dias</Text>
                <Text style={global.dinheirocashback}>R$52,59</Text>
                <Image source={require ("../../assets/help.png")} style={global.helpcash} />
            </View>
        </View>

    );
}