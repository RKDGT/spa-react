import React, {useEffect} from "react";
import "./FAQ.css";

function FAQ() {
    useEffect(() => {
        document.getElementById("default-collapse").click();
      }, []);
  return (
    <div className="FAQ" id="FAQ">
        <div className="why-choose-us-header">
            <h2 className="why-choose-us-header-title">Frequently asked questions</h2>
            <p className="why-choose-us-header-description">The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook</p>        
        </div>
        <div className="accordion-container">
            <div id="accordion" className="accordion">
                <div className="card mb-0">
                    <div className="card-header collapsed" data-toggle="collapse" href="#collapseOne" id="default-collapse">
                        <p className="card-title" >
                            How to contact with riders emergency?
                        </p>
                    </div>
                    <div id="collapseOne" className="card-body collapse" data-parent="#accordion" >
                        <p className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </p>
                    </div>
                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                        <p className="card-title">
                            App installation failed, how to update system information?
                        </p>
                    </div>
                    <div id="collapseTwo" className="card-body collapse" data-parent="#accordion" >
                        <p className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                            craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </p>
                    </div>
                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        <p className="card-title">
                            Website reponse taking time, how to improve?
                        </p>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion" >
                        <p className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.
                        </p>
                    </div>
                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFoure">
                        <p className="card-title">
                            New update fixed all bug and issues
                        </p>
                    </div>
                    <div id="collapseFoure" className="collapse" data-parent="#accordion" >
                        <p className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.
                        </p>
                    </div>
                    <div className="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                        <p className="card-title">
                            How to contact with riders emergency?
                        </p>
                    </div>
                    <div id="collapseFive" className="collapse" data-parent="#accordion" >
                        <p className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FAQ;
