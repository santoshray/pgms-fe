
const PreferenceFormConfig = {
    foodservice:{
        name:"food",
        title:"Food Service Option",
        default:"",
        placeholder:" Choose Food category",
        hide:false,
        readonly:false,
        options:["Vegetarian","Non-Vegetarian","Jain","None"],
        comment:"" 
    },
    newspaper:{
        name:"newspaper",
        title:"News Paper",
        default:"",
        placeholder:"Choose",
        hide:false,
        readonly:false,
        options:["Times of India","Telegraph","None"],
        comment:"" 
    }

}

export default PreferenceFormConfig;