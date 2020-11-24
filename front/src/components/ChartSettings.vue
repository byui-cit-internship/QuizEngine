<template v-bind:color="SettingBGColor">
    <v-container fluid style="text-align:left" color="rgb(255,0,0,0.25)">
        <v-card v-bind:color="SettingBGColor">
       <v-row style="height: 25px;">
        </v-row>

         <input v-model="barCorrectColor" type="color" value="barCorrectColor" v-on:blur="barCorrectColor = $event.target.value;$emit('update:barCorrectColor', hexToRgbInit(barCorrectColor));">Bar Color 1: <input/>
         {{barCorrectColor}}
        
        <v-row style="height: 25px;">
        </v-row>
            <v-spacer/>
            <v-divider/>
        <v-btn x-large height=250  v-text="btn2" block :to="helloworld">
        </v-btn>
        <v-row style="height: 25px;">
        </v-row>
        
            <v-spacer/>
            <v-divider/>
        <v-btn x-large height=250  v-text="btn3" block :to="helloworld">
        </v-btn>
        </v-card>
    </v-container>
</template>

<script>
import jscolor from '@eastdesire/jscolor';
import colorJson from '../assets/quizColors';
export default {
    name:"ChartSettings",
    data:() => ({
        //routing
        quizlist: "/quizlist",
        helloworld:"/helloworld",
        btn1: "Quiz List",
        btn2: "Create a Quiz",
        btn3: "Results",
        defVar: jscolor,
        SettingBGColor: "rgb(135, 145, 146, 0.57)",
        barCorrectColor: "",
        barIncorrectColor: ""
    }),
    props: {
        bgColor: {
            type:String
        },
        // barCorrectColor: {
        //     type: String
        // }
    },
    methods:{
        hexToRgbInit(hex) 
        {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return this.toRGB(result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
                a:(0.5)
            } : null)
        },
        toRGB(val)
        {
            var rgb = `rgba(${val.r},${val.g},${val.b},0.25)`
            console.log(rgb)
            colorJson.correctColor=rgb;
            return rgb
        },
        setColor(color)
        {
            this.barCorrectColor = color;
        },
        updateBGColor(val)
        {
            this.bgColor = val
            this.bgColorData = val
        }
    }
};
</script>