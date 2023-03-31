<template lang="">
    <div>
        <div ref="editor"></div>
    </div>
</template>
<script>
import MyUploadAdapter from "../assets/MyUploadAdapter.js";
import { markRaw } from 'vue';
import { checkNullAndUnde } from '../assets/jsLib.js';
export default {
    props: ['text', 'ph'],
    data() {
        return {
            editor: null
        }
    },
    mounted() {
        this.makeEditor();
    },
    methods: {
        makeEditor() {
            window.ClassicEditor
                .create(this.$refs.editor, {
                    extraPlugins: [],
                    // toolbar: [],
                    placeholder: this.ph,
                })
                .then(newEditor => {
                    this.editor = markRaw(newEditor);
                    if (!checkNullAndUnde(this.text)) {
                        this.editor.setData(this.text);
                    }
                    this.MyCustomUploadAdapterPlugin();
                    // this.editor.enableReadOnlyMode( 'test2');
                })
                .catch(error => {
                    console.log(error);
                    alert('에디터생성에 실패했습니다');
                })
        },
        MyCustomUploadAdapterPlugin() {
            this.editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                return new MyUploadAdapter(loader);
            };
        },
        getText() {
            return this.editor.getData();
        }
    },
}
</script>
<style lang="">
    
</style>