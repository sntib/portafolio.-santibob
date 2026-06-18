import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects() {
    return {
      subscribe: (callback: any) => {
        callback([
         {
    titulo: 'Portfolio Angular',
    descripcion: 'Desarrollo de un portfolio web responsive utilizando Angular y TypeScript.',
    tecnologias: 'Angular'
  },
  {
    titulo: 'Instalación de Servidores',
    descripcion: 'Configuración de servicios de red y virtualización mediante VirtualBox.',
    tecnologias: 'Linux'
  },
  {
    titulo: 'Base de Datos Escolar',
    descripcion: 'Diseño e implementación de una base de datos relacional para gestión académica.',
    tecnologias: 'MySQL'
  },
  {
    titulo: 'Configuración de Redes',
    descripcion: 'Implementación de topologías y servicios de red para entornos educativos.',
    tecnologias: 'Networking'
  },
  {
    titulo: 'Informe Técnico ATX 2.0',
    descripcion: 'Investigación y documentación sobre estándares de hardware y fuentes de alimentación.',
    tecnologias: 'Hardware'
  },
  {
    titulo: 'Sistema de Gestión',
    descripcion: 'Aplicación para registro y administración de información de usuarios.',
    tecnologias: 'Java'
  }
        ]);
      }
    };
  }
}