import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles";

export default function Footer() {
    return (
        <View style={global.footer}>
            <View style={global.navigation}>
                <Image source={require ("../../assets/inicio.png")} style={global.imginicio} />
                <Text style={global.txtinicio}>Inicio</Text>
            </View>

            <View style={global.navigation}>
                <Image source={require ("../../assets/extrato.png")} style={global.imgextrato} />
                <Text style={global.txtextrato}>Extrato</Text>
            </View>

            <View style={global.navigation}>
                <Image source={require ("../../assets/vendas.png")} style={global.imgvendas} />
                <Text style={global.txtvendas}>Vendas</Text>
            </View>

            <View style={global.navigation}>
                <Image source={require ("../../assets/cartoes.png")} style={global.imgcartoes} />
                <Text style={global.txtcartoes}>Cartões</Text>
            </View>

            <View style={global.navigation}>
                <Image source={require ("../../assets/opcoes.png")} style={global.imgopcoes} />
                <Text style={global.txtopcoes}>Opções</Text>
            </View>
        </View>
    )
}