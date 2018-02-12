import React from 'react';

class Signup extends React.Component {

    render() {
        return (
            <div>
                <img class="responsive-img" style="width: 150px; border: 4px solid rgba(32, 60, 218, 0.849);" src="https://thumbs.gfycat.com/IdioticEuphoricBarnowl-max-1mb.gif"
                />


                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">home</i>
                                <input id="icon_unit" type="text" class="validate">
                                    <label for="icon_unit">Building/Unit</label>
                    </div>
                            </div>
                            <br>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <i class="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix" type="text" class="validate">
                                            <label for="icon_prefix">First Name</label>
                    </div>
                                        <div class="input-field col s6">
                                            <i class="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" type="tel" class="validate">
                                                <label for="icon_prefix">Last Name</label>
                    </div>
                                        </div>
                                        <br>
                                            <div class="row">
                                                <div class="input-field col s6">
                                                    <i class="material-icons prefix">email</i>
                                                    <input id="icon_email" type="text" class="validate">
                                                        <label for="icon_email">E-mail</label>
                    </div>
                                                    <div class="input-field col s6">
                                                        <i class="material-icons prefix">phone</i>
                                                        <input id="icon_telephone" type="tel" class="validate">
                                                            <label for="icon_telephone">Telephone</label>
                    </div>
                                                    </div>
            </form>
                                            </div>
    </div>

                                        )
}