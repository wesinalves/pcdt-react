import axios from 'axios';

const api = axios.create({
    baseURL: `https://pcdt.lais.ufrn.br`,
})

var qs = require('qs');

export default {
    
    handleLogin: (username: string, password: string) => {
        return api.get("/login/token.php", {
            params:{
                username: username,
                password: password,
                service: 'moodle_mobile_app',
            }
        });
    },

    loadSections: (token: string) => {
        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'core_course_get_contents',
                courseid: '2',
                moodlewsrestformat: 'json',
                moodlewssettingfilter: 'true',
            }
        }).then(response => {            
            //console.log(response.data)
            return response.data;
        });
    },

    loadSection: (token: string, sectionId: string) => {
        let url = '/webservice/rest/server.php?options[0][name]=sectionid&options[0][value]='
        url = url.concat(sectionId)

        return api.get(url, {
            params:{
                wstoken: token,
                wsfunction: 'core_course_get_contents',
                courseid: '2',
                moodlewssettingfilter: 'true',
                moodlewssettingfileurl: 'true',                
                moodlewsrestformat: 'json',

            }
        }).then(response => {            
            //console.log(response.data[0])            
            return response.data[0];
        });
    },

    loadModuleContent: (token: string, idModule: string, idSection: string) => {
        let url = '/webservice/rest/server.php?options[0][name]=cmid&options[0][value]='+
                  idModule+'&options[1][name]=sectionid&options[1][value]='+idSection        

        return api.get(url, {
            params:{
                wstoken: token,
                wsfunction: 'core_course_get_contents',
                courseid: '2',
                moodlewssettingfilter: 'true',
                moodlewssettingfileurl: 'true',                
                moodlewsrestformat: 'json',

            }
        }).then(response => {            
            //console.log(response.data[0])            
            return response.data[0];
        });
    },

    loadModule: (token: string, idModule: string) => {                

        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'core_course_get_course_module',                
                cmid: idModule,
                moodlewssettingfilter: 'true',
                moodlewssettingfileurl: 'true',                               
                moodlewsrestformat: 'json',

            }
        }).then(response => {            
            //console.log(response.data[0])            
            return response.data;
        });
    },

    setCompletion: (token:string, idModule: string, completed: string) => {
        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'core_completion_update_activity_completion_status_manually',
                cmid: idModule,
                completed: completed,
                moodlewsrestformat: 'json',
            }
        }).then(response=>{
            //console.log(response.data)                        
        });
    },

    loadProfile: (token:string) => {
        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'core_webservice_get_site_info',
                moodlewsrestformat: 'json',
            }            
        }).then(response => {
            //console.log(response.data)
            return response.data
        })
    },

    loadAttempts: (token:string, idQuiz: string) => {
        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'mod_quiz_get_user_attempts',                
                moodlewsrestformat: 'json',
                status: 'finished',                
                quizid: idQuiz,
            }
        }).then(response => {
            console.log(response.data)
            return response.data
        })
    },

    startAttempt: (token: string, idQuiz: string) => {
        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'mod_quiz_start_attempt',
                moodlewssettingfilter: 'true',
                moodlewssettingfileurl: 'true',                
                moodlewsrestformat: 'json',
                quizid: idQuiz,
                forcenew:1
            }
        }).then(response => {
            console.log(response.data)
            return response.data
        });
    },

    loadQuestions: (token: string, idAttempt: string, pageNumber: string) => {
        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'mod_quiz_get_attempt_data',                           
                moodlewsrestformat: 'json',
                attemptid: idAttempt,
                page: pageNumber,
            }
        }).then(response => {
            console.log(response.data)
            return response.data
        });
    },

    loadReview: (token: string, idAttempt: string) => {
        return api.get("/webservice/rest/server.php", {
            params:{
                wstoken: token,
                wsfunction: 'mod_quiz_get_attempt_review',                           
                moodlewsrestformat: 'json',
                attemptid: idAttempt,                
            }
        }).then(response => {
            console.log(response.data)
            return response.data
        });
    },

    processAttempt: (token: string, idAttempt: string, dataArray: any, finish?: boolean, timeUp?: boolean) => {
        let url = "/webservice/rest/server.php?"
        Object.keys(dataArray).forEach((element: any, index, array) => {
            if(index === array.length - 1){
                url = url.concat("data["+index+"][name]="+element+"&data["+index+"][value]="+dataArray[element])    
            }else{
                url = url.concat("data["+index+"][name]="+element+"&data["+index+"][value]="+dataArray[element]+"&")
            }
                                   
        });
        //console.log(url)

        return api.get(url, {
            params:{
                wstoken: token,
                wsfunction: 'mod_quiz_process_attempt',
                attemptid: idAttempt,                
                finishattempt: finish ? 1 : 0,
                timeup: timeUp ? 1 : 0,                
            },            
        }).then(response => {            
            console.log(response.data)
            return response.data
        })
    }
    
}
