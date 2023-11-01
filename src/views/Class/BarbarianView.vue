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
        <div class="center">
            <h3>Hit Points</h3>

            <p class="mt-2">
                <strong>Hit Dice:</strong> 1d12.
                <br>
                <strong>Health:</strong> 12 + Constitution Modifier (+1d12 + Constitution Modifier for every level after).

            </p>
            <br>
            <h3>Proficiencies</h3>

            <p>
                <strong >Armor:</strong> Light Armor, Medium Armor, Shields.
                <br>
                <strong>Weapons:</strong> Simple Weapons, Martial Weapons.
                <br>
                <strong>Tools:</strong> None.
                <br>
                <strong>Saving Throws:</strong> Strenght, Constitution
                <br>
                <strong>Skills(Choose 2):</strong> Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival
            </p>
            <br>
            <h3>Starting Equipment</h3>
            <p>
                <strong>(a)-</strong>A greataxe <strong>(b)-</strong>Any martial melee weapon
                <br>
                <strong>(a)-</strong>two handaxes <strong>(b)-</strong> Any simple weapon
                <br>
                An explorer's pack and four javelins
            </p>
        </div>
        <div class="center">
            
        </div>
    </div>


</template>



<script>
export default{
    data(){
        return{
            levels:[
                {level:"1", profBonus:"+2",feature:"Rage, Unarmored Defense",rages:"2",rageDamage:"+2"},
                {level:"2", profBonus:"+2",feature:"Reckless Attack, Danger Sense",rages:"2",rageDamage:"+2"},
                {level:"3", profBonus:"+2",feature:"Primal Path, Primal Knowledge (Optional)",rages:"3",rageDamage:"+2"},
                {level:"4", profBonus:"+2",feature:"Ability Score Improvement",rages:"3",rageDamage:"+2"},
                {level:"5", profBonus:"+2",feature:"Extra Attack, Fast Movement",rages:"3",rageDamage:"+2"},
                {level:"6", profBonus:"+2",feature:"Path feature",rages:"4",rageDamage:"+2"},
                {level:"7", profBonus:"+2",feature:"Feral Instinct, Instinctive Pounce (Optional)",rages:"4",rageDamage:"+2"},
                {level:"8", profBonus:"+2",feature:"Ability Score Improvement",rages:"4",rageDamage:"+2"},
                {level:"9", profBonus:"+2",feature:"Brutal Critical (1 die)",rages:"4",rageDamage:"+3"},
                {level:"10", profBonus:"+2",feature:"Path feature, Primal Knowledge (Optional)",rages:"4",rageDamage:"+3"},
                {level:"11", profBonus:"+2",feature:"Relentless Rage",rages:"4",rageDamage:"+3"},
                {level:"12", profBonus:"+2",feature:"Ability Score Improvement",rages:"5",rageDamage:"+3"},
                {level:"13", profBonus:"+2",feature:"Brutal Critical (2 dice)",rages:"5",rageDamage:"+3"},
                {level:"14", profBonus:"+2",feature:"Path feature",rages:"5",rageDamage:"+3"},
                {level:"15", profBonus:"+2",feature:"Persistent Rage",rages:"5",rageDamage:"+3"},
                {level:"16", profBonus:"+2",feature:"Ability Score Improvement",rages:"5",rageDamage:"+4"},
                {level:"17", profBonus:"+2",feature:"Brutal Critical (3 dice)",rages:"6",rageDamage:"+4"},
                {level:"18", profBonus:"+2",feature:"Indomitable Might",rages:"6",rageDamage:"+4"},
                {level:"19", profBonus:"+2",feature:"Ability Score Improvement",rages:"6",rageDamage:"+4"},
                {level:"20", profBonus:"+2",feature:"Primal Champion",rages:"Unlimited",rageDamage:"+4"},
               

                
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