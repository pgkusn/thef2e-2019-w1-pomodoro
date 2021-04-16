<template>
    <div class="radioList">
        <div class="listTitle">{{title}}</div>
        <div>
            <ul>
                <li v-for="(i, idx) in 15" :key="i">
                    <label>
                        <div>
                            <input type="radio" :name="title" :value="idx" :checked="idx === 0" />
                            <i class="check"></i>
                        </div>work
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
.radioList {
    .listTitle {
        margin-bottom: 16px;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        display: flex;
        margin-bottom: 16px;
        width: 33.3%;
        align-items: center;
    }
    label {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        & > div {
            position: relative;
            display: inline-block;
            margin-right: 4px;
            width: 24px;
            height: 24px;
        }
    }
    input[type="radio"] {
        margin: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #fff;
        border-radius: 50%;
        vertical-align: middle;
        appearance: none;
        &:checked {
            border-color: #ff4384;
            & + .check {
                display: block;
            }
        }
        &:focus {
            outline: none;
        }
    }
    .check {
        position: absolute;
        top: 50%;
        left: 50%;
        display: none;
        width: 60%;
        height: 60%;
        border-radius: 50%;
        background-color: #ff4384;
        transform: translate(-50%, -50%);
    }
    & + .radioList {
        margin-top: 30px;
    }
}
</style>
