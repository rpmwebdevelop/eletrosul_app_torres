app.controller("formController", function($scope, $location){
  this.subestacoes = subs;

  this.linhas = lns;


  this.distancia;
  this.linhasDaSubestacao = [];
  this.subestacaoOrigem;
  this.linhaCodigo;
  this.mensagens = {'torres':'', 'distTorre1':'', 'distTorre2':''};

  $scope.$watch(angular.bind(this,
    function () {
      return this.subestacaoOrigem;
    }),angular.bind(this, function (newVal, oldVal) {
      this.linhasDaSubestacao = [];
      this.carregarLinhas(newVal);
      console.log('escutando variavel');
    })
  );

  this.carregarLinhas = function (subestacaoOrigem){
    for(i in this.linhas){
      var linha = this.linhas[i];
      if(linha.subestacao1.codigo == subestacaoOrigem || linha.subestacao2.codigo == subestacaoOrigem){
        this.linhasDaSubestacao.push({'codigo':linha.codigo, 'nome':linha.nome});
      }
    }
  }
  this.voltarClick() = function(){
    $location.path("/");
  }

  this.localizacaoClick = function (linhaCodigo, distancia){
    var linha = this.localizaLinha(linhaCodigo);
    var torres = this.localizaTorres(linha, distancia);

    this.criaMensagens(torres, linha, distancia);
    $location.path("/distancia");
  }

  this.localizaLinha = function(linhaCodigo){
    for(i in this.linhas){
      var linha = this.linhas[i];
      if(linha.codigo == linhaCodigo)
        return linha;
    }
    return null;
  }

  this.localizaTorres = function(linha, distancia){
    var torres = [];
    switch (this.subestacaoOrigem) {
      case linha.subestacao1.codigo:
        torres = this.torresSub1(linha, distancia);
        break;
      case linha.subestacao2.codigo:
        torres = this.torresSub2(linha, distancia);
        break;
      default:
    }

    return torres;
  }

  this.torresSub1 = function(linha, distancia){
    var torres = [];
    var torre;

    for(var i = (linha.torres.length - 1); i >= 0; i--){
      torre = linha.torres[i];
      if(torre.distSub1 <= distancia){
        torres.push(torre);
        break;
      }
    }
    for(i in linha.torres){
      torre = linha.torres[i];
      if(torre.distSub1 >= distancia){
        torres.push(torre);
        break;
      }
    }

    return torres;
  }

  this.torresSub2 = function(linha, distancia){
    var torres = [];
    var torre;

    for(i in linha.torres){
      torre = linha.torres[i];
      if(torre.distSub2 <= distancia){
        torres.push(torre);
        break;
      }
    }

    for(var i = (linha.torres.length - 1); i >= 0; i--){
      torre = linha.torres[i];
      if(torre.distSub2 >= distancia){
        torres.push(torre);
        break;
      }
    }
    return torres;
  }

  this.criaMensagens = function(torres, linha, distancia){
    if(torres[1] == null){
      this.mensagens.torres = "A falha está entre: "+"Torre "+torres[0].id+" e "+this.subestacaoOrigem;
      this.mensagens.distTorre1 = "Distância "+this.subestacaoOrigem+": "+distancia;
      switch (this.subestacaoOrigem) {
        case linha.subestacao1.codigo:
          this.mensagens.distTorre2 = "Distância torre "+torres[0].id+": "+(torres[0].distSub1 - distancia);
          break;
        case linha.subestacao2.codigo:
          this.mensagens.distTorre2 = "Distância torre "+torres[0].id+": "+(torres[0].distSub2 - distancia);
          break;
      }
    }else if(torres[0].id == torres[1].id){
      this.mensagens.torres = "A falha está na torre: "+torres[0].id;
    }else{
      this.mensagens.torres = "A falha está entre as torres: "+torres[0].id+" e "+torres[1].id;
      switch (this.subestacaoOrigem) {
        case linha.subestacao1.codigo:
          this.mensagens.distTorre1 = "Distância torre "+torres[0].id+": "+(distancia - torres[0].distSub1);
          this.mensagens.distTorre2 = "Distância torre "+torres[1].id+": "+(torres[1].distSub1 - distancia);
          break;
        case linha.subestacao2.codigo:
          this.mensagens.distTorre1 = "Distância torre "+torres[0].id+": "+(distancia - torres[0].distSub2);
          this.mensagens.distTorre2 ="Distância torre "+torres[1].id+": "+(torres[1].distSub2 - distancia);
          break;
      }
    }
  }

});
