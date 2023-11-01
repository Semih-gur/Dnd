<template>
    <div>
        <v-table class="center">
            <thead>
              <tr>
                <th class="text-left">
                    Level
                </th>
                <th class="text-left">
                    Proficiency Bonus
                </th>
                <th class="text-left">
                    Unlocked
                </th>
                <th class="text-left">
                    Rages
                </th>
                <th class="text-left">
                    Rage Damage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in levels"
                :key="item.level"
              >
                <td>{{ item.level }}</td>
                <td>{{ item.profBonus }}</td>
                <td>{{ item.feature }}</td>
                <td>{{ item.rages }}</td>
                <td>{{ item.rageDamage }}</td>
              </tr>
            </tbody>
        </v-table>
    </div>
    <div class="mt-5">
        <v-expansion-panels class="center">
            <v-expansion-panel
            class="mt-2"
            title="Level 1"
            text="Occaecat cupidatat cupidatat consequat ut culpa ex veniam commodo sint tempor incididunt nisi. Nulla quis ad culpa ipsum occaecat officia sit non sunt laborum dolor sunt voluptate elit. Laborum velit do in Lorem laboris. Cillum sunt Lorem proident velit tempor velit do elit. Cupidatat qui irure officia minim enim ut in.

Exercitation labore laboris incididunt officia nulla non fugiat eiusmod ipsum adipisicing aliquip tempor. Sint est qui exercitation qui in labore nostrud veniam adipisicing dolor reprehenderit. Laborum id consequat sint velit non non velit est ad cupidatat aliquip adipisicing. Eu commodo ea exercitation irure dolore esse Lorem aliquip. Tempor et officia tempor exercitation fugiat. Deserunt proident excepteur ex do. Quis exercitation ea nostrud aute consectetur ad aute laboris cillum.

Dolore in nostrud aliquip excepteur aliqua. Mollit adipisicing tempor elit occaecat minim ullamco consectetur. Ad irure eiusmod adipisicing in nostrud veniam incididunt amet Lorem cupidatat.

Fugiat aute nulla veniam non est mollit ex. In magna enim voluptate dolore aute sit sit irure tempor ex. Voluptate magna dolor cillum consequat dolore eiusmod cupidatat aliqua elit. Id culpa laboris velit veniam culpa irure velit officia ullamco. Consectetur ipsum laboris reprehenderit est ullamco aliqua Lorem."
            >
            
            </v-expansion-panel>

            <v-expansion-panel
            class="mt-2"
            title="Level 2"
            text="Occaecat cupidatat cupidatat consequat ut culpa ex veniam commodo sint tempor incididunt nisi. Nulla quis ad culpa ipsum occaecat officia sit non sunt laborum dolor sunt voluptate elit. Laborum velit do in Lorem laboris. Cillum sunt Lorem proident velit tempor velit do elit. Cupidatat qui irure officia minim enim ut in.

Exercitation labore laboris incididunt officia nulla non fugiat eiusmod ipsum adipisicing aliquip tempor. Sint est qui exercitation qui in labore nostrud veniam adipisicing dolor reprehenderit. Laborum id consequat sint velit non non velit est ad cupidatat aliquip adipisicing. Eu commodo ea exercitation irure dolore esse Lorem aliquip. Tempor et officia tempor exercitation fugiat. Deserunt proident excepteur ex do. Quis exercitation ea nostrud aute consectetur ad aute laboris cillum.

Dolore in nostrud aliquip excepteur aliqua. Mollit adipisicing tempor elit occaecat minim ullamco consectetur. Ad irure eiusmod adipisicing in nostrud veniam incididunt amet Lorem cupidatat.

Fugiat aute nulla veniam non est mollit ex. In magna enim voluptate dolore aute sit sit irure tempor ex. Voluptate magna dolor cillum consequat dolore eiusmod cupidatat aliqua elit. Id culpa laboris velit veniam culpa irure velit officia ullamco. Consectetur ipsum laboris reprehenderit est ullamco aliqua Lorem."
            >
            
            </v-expansion-panel>
        </v-expansion-panels>
    </div>


</template>



<script>
export default{
    data(){
        return{
            levels:[
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {id:"0",level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},

                
            ]
        }

    }


}



</script>

<style>
.center{
    width:80%;
}


</style>