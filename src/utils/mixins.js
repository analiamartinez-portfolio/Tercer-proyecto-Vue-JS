export default {
    methods: {
        validateName(name){
            return name[0].toUpperCase() + name.substring(1)
        }
    }
}